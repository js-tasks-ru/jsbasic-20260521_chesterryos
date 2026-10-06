function showSalary(users, age) {
  let string = users.filter(user => user.age <= age)
  string = string.map(user => user.name + ', ' + user.balance);
  return string.join('\n');
}
