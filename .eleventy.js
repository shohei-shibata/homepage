module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addLiquidFilter("formatDate", function(value) {
    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ]
    let d = new Date(value)
    
    const day = d.getUTCDate();
    const monthIndex = d.getUTCMonth();
    const year = d.getUTCFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;   
  });
};
