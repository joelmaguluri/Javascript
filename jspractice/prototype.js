function car(name,model_number,price)
{
   this.name=name;
   this.model=model_number;
   this.price=price;
}
car.prototype.GiveMeSpecs = function () {
  return this.name+'\t'+this.model+'\t'+this.price;
};

var nissan=new car('nissan','NS01','7lkhs');
console.log(nissan.GiveMeSpecs());
