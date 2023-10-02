module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        name: String,
        email: String,
        function: String, 
        addresse: String,
        purpose: String, 
        created_at: Date, 
        // offer: [String],
        accepted: Boolean,

      },
      { timestamps: true }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
    const Partner = mongoose.model("partner", schema);
    return Partner;
  };