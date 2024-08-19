import classes from './BookList.module.css';
export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/412JSB73D2L._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51QLKvQCj-L.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61YHUzQmuBL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div className={classes.divBorder}>
         <h3>{pageTitle}</h3>
            <img src={book1} className={classes.images} alt="Lord of the Rings" />
            <img src={book2} className={classes.images} alt="Miracles from heaven" />
            <img src={book3} className={classes.images} alt="PS I Love You" />      
      </div>      
   );
}