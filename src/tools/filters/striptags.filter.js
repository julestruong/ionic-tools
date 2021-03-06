function () {
    /**
    * @ngdoc filter
    * @description remove html tags
    * @usage
    * <p ng-bind-html="article.body | dcToolsStriptags"></p>
    *
    */
    return function cleanTags(str) {
        if (!str) {
            return '';
        }
        return str.replace(/(<([^>]+)>)/gi, '');
    };
}
