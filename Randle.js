/*
    Randle - Random string and number generator 
    @author Joel Perry 
    @date 01/02/15
*/

var Randle = {
    /*
     * Generates a random number between min and max values
     * @param int min - Minimum value
     * @param int max - Maximum value
     * @return int
     */
    number : function (min, max) {
        if (isNaN(min) && isNaN(max) && ! max > min) {
            throw new Exception('Invalid input');
        }
        
        var range = max - min + 1;
        return min + (Math.floor((Math.random() * range)));
        
    },
    /*
     * Generates a random string of capitalised and lowercase alphabetical characters of a given length
     * @param int length - Length of random string
     * @return string 
     */
    string : function (length) {
        var string = "";
        
        for (var i = 0; i < length; i++) {
            var randomNumber = this.number(65, 122)
            
            while (randomNumber >= 91 && randomNumber <= 96) { // [ \ ] ^ _ `
                randomNumber = this.number(65, 122);
            }
            
            string += String.fromCharCode(randomNumber);
        }
        
        return string;
    }
};