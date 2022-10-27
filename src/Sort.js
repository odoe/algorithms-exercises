import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  // do cool stuff here

  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i < nums.length; ++i) {
      snapshot(nums);
      if (nums[i + 1] && nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  // return nums;
  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
