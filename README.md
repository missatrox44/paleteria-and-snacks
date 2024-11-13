Button

```javascript
   <button className="bg-gradient-to-br from-custom-blue to-custom-purple  font-bold py-2 px-4 rounded-3xl opacity-80 hover:opacity-100 text-xl">
          Follow
    </button>
```



        {/* Background effect */}
        {/* <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10 rounded-lg -top-4 -left-4 blur-lg transform scale-105"></div> */}



        // .food-card {
//   // width: 220px;
//   // height: 220px;
//   background-image: url("/card-bg-square.svg");
//   background-repeat: none;
//   background-size: cover;
//   border-radius: 32px; 
//   overflow: hidden;  
// }


// .pink-neon-glow {
//     text-shadow: 
//       0 0 5px #ff4bd8, 
//       0 0 10px #ff4bd8, 
//       0 0 15px #ff4bd8, 
//       0 0 20px #ff4bd8, 
//       0 0 25px rgba(255, 75, 216, 0.5), 
//       0 0 35px rgba(255, 75, 216, 0.4);
// }

// .pink-neon-glow {
//   text-shadow: 
//     0 0 3px #ff4bd8, 
//     0 0 7px rgba(255, 75, 216, 0.6),
//     0 0 10px rgba(255, 75, 216, 0.4);
// }



GRID LAYOUT FOOD CATEGORY
```javascript
  <div className="flex flex-col pb-8">
        <div className="flex items-center gap-x-4">
          <Image src={imgSrc} alt={`${categoryTitle} icon`} width={50} height={50} />

          <h2 className={classNames("font-acme text-2xl md:text-4xl", classes)}>{categoryTitle}</h2>
        </div>
        <p className="text-xl pt-3">{categoryDescription}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-14">
        {foodItems.map((item: FoodItem, index: number) => (
          <div
            key={index}
            className="col-span-4 md:col-span-1 flip-card"
          >
            <div className="flip-card-inner w-full h-full">
              <div className="flip-card-front card-base">
                <div className="flex flex-col gap-y-6 items-center">
                  <Image src={item.image} alt={item.name} width={125} height={125}    />
                  <p className="font-acme text-2xl text-center">{item.name}</p>
                </div>
              </div>
              <div className="flip-card-back card-base">
                <h1 className="text-white font-acme text-2xl">Back of {item.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div> 
      ```