class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  // @testDecorator
  // pilot(): void {
  //   console.log('swish');
  // }

  // @logError
  // pilot(): void {
  //   throw new Error();
  // }

  @logError2('Oops, boat was sunk')
  pilot(): void {
    throw new Error();
  }
}

// first argument is prototype of the object(class), protytype only access method definition
// prototype can't access object property
// second is the key of the property/method/accessor on the object
// third is property descripter
function testDecorator(target: any, key: string): void {
  console.log('Key:', key);
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = () => {
    try {
      method();
    }catch(e) {
      console.log('Oops, boat was sunk');
    }
  }
}

// decorator factories
function logError2(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
  
    desc.value = () => {
      try {
        method();
      }catch(e) {
        console.log(errorMessage);
      }
    }
  }
}

// new Boat().pilot();
