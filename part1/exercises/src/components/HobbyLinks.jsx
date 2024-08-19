import classes from './HobbyLinks.module.css'
export default function HobbyLinks(){
let hobbyLinks = ["https://www.lionbrand.com/pages/how-to-crochet?srsltid=AfmBOoqO9qaOJy9jY91XNhvJjY-HXRyTUP7zmW7W48DHma5HVrpBKAnG",
"https://www.joyofbaking.com/", 
"https://onestroke.com/?srsltid=AfmBOoqAOJ5orZ09hr0iOec0e318Whf22h03c81HP7eC_1y9VxE7V2_O"];
    return(
        <div className={classes.hobbyLinkDiv}>
            <h5>My Hobbies</h5>
            <a href={hobbyLinks[0]} className= {classes.lineBreak}>Learn to crochet</a>
            <a href={hobbyLinks[1]} className= {classes.lineBreak}>Learn to bake</a>
            <a href={hobbyLinks[2]} className= {classes.lineBreak}>Learn to paint</a>
        </div>  
        );
       
}