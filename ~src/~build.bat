@echo off
ECHO Building digiQR.min.js

::verify compiler present
IF NOT EXIST %~dp0~compiler.jar GOTO missingcompiler

::Check needed files exist then minify
IF NOT EXIST %~dp0~wrapperStart.js GOTO missingfile
IF NOT EXIST %~dp0~wrapperEnd.js GOTO missingfile
IF NOT EXIST %~dp0header.js GOTO missingfile
IF NOT EXIST %~dp0qrcode_modified.js GOTO missingfile
IF NOT EXIST %~dp0main.js GOTO missingfile
IF NOT EXIST %~dp0footer.js GOTO missingfile
IF EXIST %~dp0~~temp0.js DEL %~dp0~~temp0.js
COPY /b %~dp0header.js + %~dp0qrcode_modified.js + %~dp0main.js + %~dp0footer.js %~dp0~~temp0.js 1>NUL
IF NOT EXIST %~dp0~~temp0.js GOTO failed
IF EXIST %~dp0~~temp1.js DEL %~dp0~~temp1.js
JAVA -jar %~dp0~compiler.jar --js %~dp0~~temp0.js --js_output_file %~dp0~~temp1.js --compilation_level ADVANCED 1>NUL
DEL %~dp0~~temp0.js
IF NOT EXIST %~dp0~~temp1.js GOTO failed
IF EXIST %~dp0..\digiQR.min.js DEL %~dp0..\digiQR.min.js
COPY /b %~dp0~wrapperStart.js + %~dp0~~temp1.js + %~dp0~wrapperEnd.js %~dp0..\digiQR.min.js /V 1>NUL
DEL %~dp0~~temp1.js
IF NOT EXIST %~dp0..\digiQR.min.js GOTO failed

::Pause if not batch running
IF "%1"=="Y" GOTO end
ECHO Success
PAUSE
GOTO end

::Compiler Missing
:missingcompiler
ECHO Failed: Google Closure Compiler missing.
PAUSE
GOTO end

::Show generic error message
:missingfile
ECHO Failed: Needed file was missing
PAUSE
GOTO end

::Expected output file missing
:failed
ECHO Failed: Couldn't create digiQR.min.js
PAUSE

:end