// defines a Grace module "curl", which is a thin wrapper
// of a subset of the libcurl API. The module contains one method:
//     easy -> CurlEasy
// This method wraps curl_easy_init, returning a CurlEasy object
// representing a CURL* handle.

type Octets = Unknown
type CurlEasy = type {
    onReceive(blk: Block1) -> Done
    url:= (url: String) -> Done
    perform -> Done
    onHeader(blk: Block1) -> Done
    escape(s: String | Octets) -> String
    unescape(s: String | Octets) -> Octets
    responseCode -> Number
    effectiveUrl -> String
    includeResponseHeader:=(b: Boolean) -> Done
    followLocation:=(b: Boolean) -> Done
}

class easy {
    method onReceive(blk: Block1) -> Done { }
        // Set the block to be executed when data is received in response
        // to a request. The block is passed the received data as an Octets
        // object. Wraps CURLOPT_WRITEFUNCTION.

    method url:= (url: String) -> Done { }
        // Set the URL to be requested. Wraps CURLOPT_URL.

    method perform -> Done { }
        // Make the request. Wraps curl_easy_perform.

    method onHeader(blk: Block1) -> Done { }
        // Set the block to be executed when a header is received in response
        // to a request. The block is passed the received header as an Octets
        // object. Wraps CURLOPT_HEADERFUNCTION.

    method escape(s: String | Octets) -> String { }
        // URL-encodes s. Wraps curl_easy_escape.

    method unescape(s: String | Octets) -> Octets { }
        // URL-decodes s. Wraps curl_easy_unescape.

    method responseCode -> Number { }
        // Returns the result code of the most recent request performed.
        // Wraps CURLINFO_RESPONSE_CODE.

    method effectiveUrl -> String { }
        // Returns the effective URL, after any redirects, of the most
        // recent request performed. Wraps CURLINFO_EFFECTIVE_URL.

    method includeResponseHeader:=(b: Boolean) -> Done { }
        // Sets whether to include response headers in the returned data.
        // Wraps CURLOPT_HEADER.

    method followLocation:=(b: Boolean) -> Done { }
        // Sets whether to follow any Location: headers that appear in.
        // Wraps CURLOPT_FOLLOWLOCATION.
}
