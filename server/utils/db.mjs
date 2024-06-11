import mongoose from 'mongoose';

const connetcDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://davidheidari2:9GD3YTPcU8s2i3LE@superheroes.bydwz4d.mongodb.net/")
            .then(console.log('MongoDb is connected.'));
        
    } catch(error) {
        console.log(error.massage)
    }
}

export default connetcDB;