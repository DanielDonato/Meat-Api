import * as mongoose from 'mongoose';
import { Restaurant } from '../restaurants/restaurants.model';
import { User } from '../users/users.model';

export interface Review extends mongoose.Document {
    date: Date,
    rating: number,
    comments: string,
    restaurant: mongoose.Types.ObjectId | Restaurant, //compilador ira reclamar, pois ele só ira ler as propriedades em comum entre os dois tipos -> Basta dar um casting para any
    user : mongoose.Types.ObjectId | User
};

const reviewSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comments: {
        type: String,
        required: true,
        maxlength: 500
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export const Review = mongoose.model<Review>('Review', reviewSchema);