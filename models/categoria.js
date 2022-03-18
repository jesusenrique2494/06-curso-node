const { Schema, model } = require("mongoose");

const CategoriaSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio'],
        unique:true,
    },
    state:{
        type:Boolean,
        default:true,
        required:[true,'El nombre es obligatorio']
    },
    usuario:{
        type:Schema.Types.ObjectId,
        ref:'Usuario',
        required:true
    }
});

CategoriaSchema.methods.toJSON= function(){
    const { __v, state, ...data}= this.toObject();
    return {...data};
}

module.exports=model('Categoria', CategoriaSchema);