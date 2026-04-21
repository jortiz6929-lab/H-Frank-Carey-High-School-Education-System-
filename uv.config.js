self.__uv$config = {
    prefix: "/edu-data/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.0.2/dist/uv.handler.js",
    client: "https://cdn.jsdelivr.net/npm/@titaniumnetwork-dev/ultraviolet@3.0.2/dist/uv.client.js",
    bundle: "uv.bundle.js",
    config: "uv.config.js",
    sw: "uv.sw.js",
    bare: [
        "https://tomp.app/",
        "https://bare.benroxy.com/",
        "https://uv.student-resources.workers.dev/bare/"
    ],
};
