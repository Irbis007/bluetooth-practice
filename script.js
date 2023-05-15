

const button = document.querySelector('button')



button.addEventListener('click', (event)=>{
    let options = {
        filters: [
          { services: ["heart_rate"] },
          { services: [0x1802, 0x1803] },
          { services: ["c48e6067-5295-48d3-8d5c-0395f61792b1"] },
          { name: "ExampleName" },
          { namePrefix: "Prefix" },
        ],
        optionalServices: ["battery_service"],
      };
      
      navigator.bluetooth
        .requestDevice(options)
        .then((device) => {
          console.log(`Name: ${device.name}`);
          // Do something with the device.
        })
        .catch((error) => console.error(`Something went wrong. ${error}`));
})