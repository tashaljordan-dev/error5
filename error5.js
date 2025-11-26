function processFile(fileName, fileData) {
  try {
    // TODO: Add input validation here
    if(fileName) {
        throw new Error("File name is missing.");
    }
    if(typeof fileData!=="string"){
        throw new Error("File data must be a string.");
    }
    if(fileData.trim() === ""){
        throw new Error("File data cannot be empty.");
    }
    // TODO: Implement simulated file processing here
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);

    //simulate reading 
    console.log("Reading file...");

    
    // TODO: use finally block 

    
  } catch (err) {
    // TODO: Implement error handling
    console.error("Error occurred.");
  }finally{
    console.log("Finished processing file.");
  };
  }
  // TODO: Implement a finally block to close resources


processFile(); // ❌ ReferenceError: File name is missing
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully