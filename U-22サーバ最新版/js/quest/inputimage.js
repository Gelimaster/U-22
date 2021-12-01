var image_num = [];
var image_id = [];
var image_name = [];
var image_class = [];
var image_html = [];
var image_cnt = [];
var count2 = 0;

function dataRead2(res) {
    // console.log(res);
    inputImages(res);
    roop(target);
}

function inputImages(res) {
    // console.log(res);
    for (var i in res) {
        image_num[count2] = res[i].image_num;
        image_id[count2] = res[i].image_id;
        image_name[count2] = res[i].image_name;
        image_class[count2] = res[i].image_class;
        image_html[count2] = res[i].images_html;
        image_cnt[count2] = 1;
        count2++;
    }
    for (var i = 0; i < count2; i++) {
        image_cnt[i]++;
        var tag = document.createElement("img");
        tag.id = image_id[i];
        tag.draggable = "true";
        tag.className = 'drag-and-drop ' + image_class[i];
        tag.addEventListener('dragstart', Drag, false);
        tag.src = "images/" + image_name[i];
        document.getElementById("toolbox2").appendChild(tag);
        if (image_num[i] == 5) {
            if (localStorage.getItem('user_stage') >= 21) {
                tag.style.display = "inline";
            } else {
                tag.style.display = "none";
            }
        } else {
            tag.style.display = "none";
        }
    }

}
function imgin(get) {
    // console.log(get);
    if (get == null) {
        console.log("空");
        return "";
    } else {
        return textin(get.id);
    }
}

function textin(get) {
    // console.log(get);
    var cnt2 = 0;
    var imgid = get.slice(0, -2);
    for (var c = 0; c < count2 && imgid != image_id[c]; c++) {
        cnt2++;

    }
    // console.log(image_html[cnt2]);
    return image_html[cnt2];
}