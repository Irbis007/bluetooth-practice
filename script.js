

const button = document.querySelector('button')



button.addEventListener('click', (event)=>{

      navigator.bluetooth
        .requestDevice()
        .then((device) => {
          console.log(device);
          // Do something with the device.
        })
        .catch((error) => console.error(`Something went wrong. ${error}`));
})