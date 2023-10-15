class Router {
    constructor() {
        this.paths = {
            'GET': {},
            'POST': {},
            'PUT': {},
            'DELETE': {}
        };
    }

    setRoute = function(method, pathname, callback) {
        let route = this.paths[method];
        const pathSections = pathname.split('/');

        for (let i = 0; i < pathSections.length; i++) {
            const pathSection = pathSections[i];
            const pathSectionValue = route[pathSection];
            
            // if this reference is an array, add the function to the array
            if (Array.isArray(pathSectionValue)) {
                pathSectionValue.push(callback);
                return;
            }
            // if we are the last section, with no existing array of functions, put the callback in an array at this value
            if (i === pathSections.length - 1) {
                route[pathSection] = [callback];
                return;
            }
            // if we get here, we are still adding the path, so add a key to the current object level (current route reference), 
            // with a value of an empty object, then index the route into that key
            route[pathSection] = {};
            route = route[pathSection];
        }
    }

    route = function(request, response) {
        
        const url = new URL(request.url, `http://${request.headers.host}`);
        const pathSections = url.pathname.split('/');

        const method = request.method;
        let index = this.paths[method];

        for (const section of pathSections) {
            const singleKey = Object.keys(index)[0];

            // if indexing into this key is not undefined, index into it
            if (index[section]) {
                index = index[section];
            } 
            // otherwise, check if there is a wildcard key (key beginning with ':') 
            // good practice here requires pathnames with a wildcard to have no other possible values at the wildcard's path level, hence 'singleKey'
            else if (singleKey[0] === ':') {
                index = index[singleKey];
            }
            // if that doesn't exist, we have a 404 not found error
            else {

            }
        }

        // pathname is valid if there are no wildcards, potentially valid if there are
        // the indexed object now references an array of functions to execute (middleware or the responding function)
        index[0](request, response);

    }


}

const router = new Router();
module.exports = router;