import utensilsIcon from "/utensils-svgrepo-com.svg";
import tranportIcon from "/bus-svgrepo-com.svg";
import entertainIcon from "/entertainment-svgrepo-com.svg";
import accommodationIcon from "/hotel-14-svgrepo-com.svg";
import othersIcon from "/other-svgrepo-com.svg";

export function getIconType(type) {
  switch (type) {
    case "food":
      return utensilsIcon;
    case "transportation":
      return tranportIcon;
    case "entertainment":
      return entertainIcon;
    case "accommodation":
      return accommodationIcon;
    default:
      return othersIcon;
  }
}
