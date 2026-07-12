function makeFriendsList(friends) {
let list = document.createElement('ul');
for(let friend of friends){
    list.insertAdjacentHTML('beforeend', `<li>${friend.firstName} ${friend.lastName}</li>`)
}
return list
}
