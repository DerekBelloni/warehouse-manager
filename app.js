const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', missing: false },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', missing: false },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', missing: false },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', missing: false },
  { heavy: true, priority: true, fragile: true, to: 'Brittany', missing: false },
  { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', missing: false },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', missing: false }]


let current = []

function draw(arr) {
  let template = ""
  for (let i = 0; i < arr.length; i++) {
    const package = arr[i]
    template += `
    <div class="col-12 col-md-6 col-lg-3 d-flex justify-content-around mt-2">
    <div class="card" style="width: 18rem;" onclick="guessMissing()">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" >Heavy: ${package.heavy} </li>
        <li class="list-group-item">Priority: ${package.priority}</li>
        <li class="list-group-item">Fragile: ${package.fragile}</li>
        <li class="list-group-item">To: ${package.to}</li>
        <li class="list-group-item">Tracking Number: ${package.trackingNumber}</li>
        
      </ul>
    </div>
  </div>
    `
  }
  document.getElementById("cards").innerHTML = template
}


function filterHeavy() {
  // let heavyPackages = []
  // for (let i = 0; i < packages.length; i++) {
  //   const packageWeight = packages[i];
  //   if (packageWeight.heavy) {
  //     heavyPackages.push(packageWeight)

  //   }
  // }

  current = current.filter(heavyPac => heavyPac.heavy)
  draw(current)
}

function filterPriority() {
  // let priorityPackages = []
  // for (let i = 0; i < packages.length; i++) {
  //   const priorityPackage = packages[i];
  //   if (priorityPackage.priority) {
  //     priorityPackages.push(priorityPackage)
  //   }

  // }
  current = current.filter(priPacks => priPacks.priority == true)
  draw(current)
}

function filterFragile() {
  // let fragilePackages = []
  // for (let i = 0; i < packages.length; i++) {
  //   const fragilePacks = packages[i];
  //   if (fragilePacks.fragile) {
  //     fragilePackages.push(fragilePacks)
  //   }
  // }
  current = current.filter(frPack => frPack.fragile == true)
  draw(current)
}

function filterRecipient(name) {
  // let packageRecipients = []
  // for (let i = 0; i < packages.length; i++) {
  //   const packageRecs = packages[i];
  //   packageRecipients.push(packageRecs)


  // }

  current = current.filter(package => package.to == name)
  draw(current)
}

function filterTrackingNumber(trackingNumber) {
  current = current.filter(package => package.trackingNumber == trackingNumber)
  draw(current)

}

function guessMissing(name) {
  let missingPackage = packages.find(package => package.missing)
  if (missingPackage.missing == true) {
    alert('You guessed right!')
  }
  else {
    alert('No Soup for You!')
  }
}

function reset() {
  packages.forEach(pack => pack.missing = false)
  const randPackage = Math.floor(Math.random() * packages.length)
  packages[randPackage].missing = true
  current = packages
  console.log(packages[randPackage]);
  draw(current)
}

reset()