import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const userCollection = 'users';

//========={ Esquema de users }=========
const userSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    age: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: "user"
    },

    carts: {
        type: [
            {
                cart: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'carts'
                }
            }
        ],
        ref: 'carts'
    }
});
//========={ Esquema de users }=========

userSchema.plugin(mongoosePaginate);


userSchema.pre('find', function () {
    this.populate('carts.cart');
});

const userModel = mongoose.model(userCollection, userSchema);
export default userModel;