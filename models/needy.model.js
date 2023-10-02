
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        phone: Number,
        picture: String,
        description: String,
        skills: String,
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Needy = mongoose.model("needy", schema);
    return Needy;
  };