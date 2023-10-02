

module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        email: String,
        type: String,
        purpose: String, 
        anonymous: Boolean,
      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Donation = mongoose.model("donation", schema);
    return Donation;
  };