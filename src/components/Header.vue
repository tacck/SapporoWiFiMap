<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Sapporo City WiFi Map</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Info" right>
            <b-dropdown-item
              target="_blank"
              href="https://ckan.pf-sapporo.jp/dataset/2df7491e-c97a-4475-9c05-1c0bb282f73e/resource/b1fe3a37-e97e-402a-ba5c-f578a7a41851?view_id=50ab3a49-a7d0-40c8-91a4-a93806175cbb"
            >Data Source</b-dropdown-item>
            <b-dropdown-item href="#">
              <div id="show-btn" @click="$bvModal.show('modal-author')">Author</div>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-modal id="modal-author" hide-header hide-footer>
      <div class="d-block text-center">
        <a href="https://twitter.com/tacck">@tacck</a>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('modal-author')">close</b-button>
    </b-modal>
  </div>
</template>

<style scoped>
.header {
  z-index: 100;
}
#modal-author {
  z-index: 10000;
}
</style>
