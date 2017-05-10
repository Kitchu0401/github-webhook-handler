var gith = require('gith').create(8888)
// var exec = require('child_process').exec 

gith({
  repo: 'Kitchu0401/codenotforfood'
}).on('all', function (payload) {

  console.log('hook event received')
  
  console.log('gith payload')
  console.log(payload)
  
  console.log('original-github payload')
  console.log(payload.original)

  // exec('/var/www/codetip/hook/hook.sh ' + payload.branch, function(err, stdout, stderr){
  //   if (err) return err
  //   console.log(stdout)
  //   console.log("git deployed to branch " + payload.branch)
})
