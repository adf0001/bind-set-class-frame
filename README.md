# bind-set-class-frame
bind module set-class to a frame name

# Install
```
npm bind-set-class-frame
```

# Usage & Api
```html
<style>
.ht.selected{
	background:lavender;
}
</style>

<script>
bind_set_class_frame = require("bind-set-class-frame");

//bindSetClassFrame(defaultFrameName)
ht_set_class = bind_set_class_frame.bindFrame("ht");

</script>

<span class='ht selected'>css .ht.selected style sample</span>

<div>
<span>111 </span><span>222 </span><span>333 </span><span>444 </span><br>

<!-- refer to set_class.setClass() -->
<label><input type=checkbox 
	onchange="var chs=parentNode.parentNode.childNodes;
	ht_set_class.set([chs[0],chs[2]],this.checked?'selected':'',this.checked?'':'selected',null,'ht');
	ht_set_class.set([chs[1],chs[3]],this.checked?'':'selected',this.checked?'selected':'',null,'ht');"
></input>toggle by set()</label><br>

<!-- refer to set_class.setByElement() -->
<label><input type=checkbox 
	onchange="var chs=parentNode.parentNode.childNodes;
	ht_set_class.setByElement('selected',this.checked?[chs[0],chs[2]]:[chs[1],chs[3]],
	this.checked?[chs[1],chs[3]]:[chs[0],chs[2]],null,'ht');"
></input>toggle by setByElement()</label><br>

<label><input type=checkbox 
	onchange="var chs=parentNode.parentNode.childNodes;
	ht_set_class.setByElement('selected',null,null,[chs[0],chs[1],chs[2],chs[3]]);"
></input>setByElement() toggle</label><br>
</div>;

```
