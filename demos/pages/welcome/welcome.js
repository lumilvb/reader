Page({
onTap:function(){
  // wx.navigateTo({
  //   url: '../posts/posts',
  // })
  wx.redirectTo({
    url: '../posts/posts',
  })
},
onUnload:function(){
  console.log('Unload');
},
onHide:function(){
  console,log('Hide');
}
})