exports.config = (function() {
    var Config = function() {
        this.deps = [];
    };

    Config.prototype = {
        _loadDependencies: function() {
            var routesDir = fs.readdirSync('routes');
            var i, ii;

            for (i = 0, ii = routesDir.length; i < ii; i++) {
                this.deps.push('routes/' + routesDir[i].replace(/.js$/, ""));
            }

            var controllersDir = fs.readdirSync('controllers');
            for (i = 0, ii = controllersDir.length; i < ii; i++) {
                this.deps.push('controllers/' + controllersDir[i].replace(/.js$/, ""));
            }
        },

        getDependencies: function() {
            if(!this.deps)
                this._loadDependencies();
            return this.deps;
        }
    };

    return new Config();
})();