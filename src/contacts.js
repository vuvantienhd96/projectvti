import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function callApi(){
    let contacts = {}
   await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        contacts = json;
        console.log(json);
      });

      return contacts;
}



