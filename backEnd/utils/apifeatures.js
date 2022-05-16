class ApiFeatures {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    search() {
            //   const keyword = this.queryStr.keyword
            //     ? {
            //         name: {
            //           $regex: this.queryStr.keyword,
            //           $options: "i",
            //         },
            //       }
            //     : {};
         const city=this.queryStr.city;
      
            this.query = this.query.find({city});
            return this;
    }
}
module.exports = ApiFeatures;  