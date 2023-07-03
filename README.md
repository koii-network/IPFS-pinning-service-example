
***** This is a test task *****
*** IN PROGRESS ***

This is a proof of concept for how Koii could be leveraged to serve as a storage network 

Koii tasks use NeDB library by default, which is an in-memory database written in JavaScript. It does not provide built-in support for read streams or buffers. NeDB is designed to store data in-memory or on disk using a single file. It reads and writes data as a whole, rather than providing stream-based or buffer-based access, Therefore in this task we only offer the capability to store JSON Objects.

--- This is a proof of concept, you can use fs to turn this into a full fledge storage network ---