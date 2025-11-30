```hbs [10,5]
<li class="list-item">
  <div> {{@user.name}} </div>
  <img
    class="profile-picture"
    src={{if this.componentInViewport @user.imageUrl}}
    alt="{{@user.name}}'s profile pic"
  />
  <div>{{@user.description}}</div>
</li>
<span {{in-viewport onEnter=(fn this.onEnterTask @user.id)}}></span>
```
