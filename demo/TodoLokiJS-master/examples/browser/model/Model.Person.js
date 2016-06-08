/**
 *
 * @constructor
 *
 * 数据集合
 */
function Person(){

}
/**
 *
 * @param src
 * @param dist
 */
Person.create = function(src,dist){

    if(dist instanceof Person){
        dist.init(src);
    }

};

/**
 *
 * @param obj
 */
Person.prototype.init = function(obj){
    var name;

    for( name in obj){

        if(obj.hasOwnProperty(name)){

            this[name] = obj[name];
        }
    }
};