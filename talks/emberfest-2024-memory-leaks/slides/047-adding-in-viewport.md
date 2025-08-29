```hbs
<li class="list-item">
  <div> {{@user.name}} </div>
  <img
    class="profile-picture"
    src={{@user.imageUrl}}
    alt="{{@user.name}}'s profile pic"
  />
  <div>{{@user.description}}</div>
</li>
```
