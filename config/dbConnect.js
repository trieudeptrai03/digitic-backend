const {default:mongoose}=require('mongoose');
const dbConnect=()=>{
    const conn=mongoose.connect('mongodb://127.0.0.1:27017/SaleLaptop?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
        .catch(err => console.log('>>>>>>>>> DB Error: ', err));
}
module.exports=dbConnect;