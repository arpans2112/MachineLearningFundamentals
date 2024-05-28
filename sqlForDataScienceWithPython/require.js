%%javascript

// Load RequireJS from a CDN
requirejs.config({
    paths: {
        'd3': 'https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min'
    }
});

require(['d3'], function(d3) {
    // Your code that depends on d3 goes here
    console.log(d3.version);
});
