<script>
  export let celeb;

  console.log(celeb);
</script>

<div class="card">
  <div class="card__img">
    <img src={celeb.image} alt="celeb" />
  </div>
  <div class="card__info">
    <div class="card__info-name">
      {celeb.name}
    </div>
    <div class="card__info-description">
      {celeb.description}
    </div>
  </div>
</div>

<style lang="scss">
  .card {
    background-color: #fff;  
    position: relative;
    border-radius: 12px;
    max-height: 500px;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
    margin: 1rem;

    &__img {
      width: 100%;
      background-size: cover;
      background-position: center;

      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }

    &__info {
      z-index: 2;
      background-color: #fff;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      padding: 16px 24px 24px 24px;

      &-name {
        font-family: "Raleway", sans-serif;
        text-transform: uppercase;
        font-size: 13px;
        letter-spacing: 2px;
        font-weight: 500;
        color: #868686;
      }

      &-description {
        font-size: 13px;
        display: -webkit-box;
        max-width: 250px;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }
</style>
