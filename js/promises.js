//keep it flexible
//study this and remember to use map,filter, reduce
// practice



//EX1
const findLastCommit = (username) => {
    return fetch("https://api.github.com/users/" + username + "/events/public", {headers: {'Authorization': 'token'+ GITHUB_TOKEN_API}})
        .then((res) => res.json())
        .then((res) => {
            return res.filter((item) => item.type === "PushEvent")[0].created_at;

        })
}
// dont forget .then to wait for your response, so the code runs correctly
findLastCommit("Chrismerritt91").then(res => console.log(res))

//EX2
const wait = (time) => {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time/1000)
        }, time)
    })

};

wait(3000).then((res) => console.log(`you'll see this after ${res} second`))