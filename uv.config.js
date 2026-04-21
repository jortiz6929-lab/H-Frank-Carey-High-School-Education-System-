self.__uv$config = {
    // Camouflaged prefix (matches the one we put in your index.html)
    prefix: "/edu-data/", 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    
    // FIXED: Removed "/uv/" because your files are in the main folder
    handler: "uv.handler.js",
    client: "uv.client.js",
    bundle: "uv.bundle.js",
    config: "uv.config.js",
    sw: "uv.sw.js",
    
    // Bare servers (these are the connection points)
    bare: [
        "https://tomp.app/",
        "https://bare.benroxy.com/",
        "https://uv.student-resources.workers.dev/bare/"
    ],
};
