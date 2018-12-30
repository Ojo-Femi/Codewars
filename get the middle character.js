function getMiddle(s)
{
  //Code goes here!
  return s.length === 1 ? s : s.length%2 === 0 ? s[s.length/2-1] + s[s.length/2] : s[Math.floor(s.length/2)]
}