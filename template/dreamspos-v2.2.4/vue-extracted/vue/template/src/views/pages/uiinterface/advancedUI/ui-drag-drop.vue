<template>
  <layout-header></layout-header>
  <layout-sidebar></layout-sidebar>

  <div class="page-wrapper cardhead">
    <div class="content">
      <!-- Page Header -->
      <layout-breadcrumb :title="title" :text="text" :text1="text1" />
      <!-- /Page Header -->

      <div class="row">
        <!-- Left Cards -->
        <div class="col-xl-6">
          <draggable
            v-model="leftCards"
            itemKey="id"
            group="cards"
            :animation="200"
            class="draggable-list"
          >
            <template #item="{ element }">
              <component :is="element.component" v-bind="element.props" @remove="removeCard" />
            </template>
          </draggable>
        </div>

        <!-- Right Cards -->
        <div class="col-xl-6">
          <draggable
            v-model="rightCards"
            itemKey="id"
            group="cards"
            :animation="200"
            class="draggable-list"
          >
            <template #item="{ element }">
              <component :is="element.component" v-bind="element.props" @remove="removeCard" />
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

const CardQuote = {
  template: `
    <div class="card custom-card card-bg-primary">
      <a href="javascript:void(0);" class="card-anchor"></a>
      <div class="card-body">
        <blockquote class="blockquote mb-0 text-center">
          <h6 class="text-fixed-white">
            The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..
          </h6>
          <footer class="blockquote-footer mt-3 fs-14 text-fixed-white op-7">
            Someone famous as <cite title="Source Title">-Helen Keller</cite>
          </footer>
        </blockquote>
      </div>
    </div>`
};

const CardFullscreen = {
  template: `
    <div class="card custom-card">
      <div class="card-header justify-content-between">
        <div class="card-title">Card With Fullscreen Button</div>
        <a href="javascript:void(0);" data-bs-toggle="card-fullscreen">
          <vue-feather type="maximize" class="zap"></vue-feather>
        </a>
      </div>
      <div class="card-body">
        <h6 class="card-text fw-semibold">FullScreen Card</h6>
        <p class="card-text mb-0">
          There are many variations of passages of Lorem Ipsum available...
        </p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary">Read More</button>
      </div>
    </div>`
};

const CardImageOverlay1 = {
  props: ['requireImage'],
  template: `
    <div class="card custom-card overlay-card text-fixed-white">
      <img :src="requireImage('media-35.jpg')" class="card-img" alt="..." />
      <div class="card-img-overlay d-flex flex-column p-0">
        <div class="card-header text-fixed-white">
          <div class="card-title">Image Overlays Are Awesome!</div>
        </div>
        <div class="card-body overflow-hidden text-fixed-white">
          <div class="card-text mb-2">
            There are many variations of passages of Lorem Ipsum available...
          </div>
          <div class="card-text">Last updated 3 mins ago</div>
        </div>
      </div>
    </div>`
};

const CardProfile1 = {
  props: ['requireImageOne'],
  template: `
    <div class="card custom-card">
      <a href="javascript:void(0);" class="card-anchor"></a>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="me-3">
            <span class="avatar avatar-md">
              <img :src="requireImageOne('avatar-1.jpg')" alt="img" />
            </span>
          </div>
          <div>
            <p class="card-text mb-0 fs-14 fw-semibold">Atharva Simon.</p>
            <div class="card-title text-muted fs-12 mb-0">Correspondent Professor</div>
          </div>
        </div>
      </div>
    </div>`
};

const CardProfile2 = {
  props: ['requireImageOne'],
  template: `
    <div class="card custom-card border border-info">
      <a href="javascript:void(0);" class="card-anchor"></a>
      <div class="card-body">
        <div class="d-flex align-items-center">
          <div class="me-3">
            <span class="avatar avatar-xl">
              <img :src="requireImageOne('avatar-10.jpg')" alt="img" />
            </span>
          </div>
          <div>
            <p class="card-text text-info mb-1 fs-14 fw-semibold">Alicia Keys.</p>
            <div class="card-title fs-12 mb-1">Department Of Commerce</div>
            <div class="card-title text-muted fs-11 mb-0">24 Years, Female</div>
          </div>
        </div>
      </div>
    </div>`
};

const CardImageOverlay2 = {
  props: ['requireImage'],
  template: `
    <div class="card custom-card overlay-card">
      <img :src="requireImage('media-36.jpg')" class="card-img" alt="..." />
      <div class="card-img-overlay d-flex flex-column p-0 over-content-bottom">
        <div class="card-body text-fixed-white">
          <div class="card-text">Image Overlays Are Awesome!</div>
          <div class="card-text mb-2">There are many variations...</div>
          <div class="card-text">Last updated 3 mins ago</div>
        </div>
        <div class="card-footer text-fixed-white">Last updated 3 mins ago</div>
      </div>
    </div>`
};

const CardSuccess = {
  props: ['requireImageOne'],
  template: `
    <div class="card custom-card card-bg-success">
      <div class="card-body">
        <div class="d-flex align-items-center w-100">
          <div class="me-2">
            <span class="avatar avatar-rounded">
              <img :src="requireImageOne('avatar-11.jpg')" alt="img" />
            </span>
          </div>
          <div>
            <div class="fs-15 fw-semibold">Samantha sid</div>
            <p class="mb-0 text-fixed-white op-7 fs-12">In leave for 1 month</p>
          </div>
        </div>
      </div>
    </div>`
};

const CardCollapsible = {
  template: `
    <div class="card custom-card">
      <div class="card-header border-bottom-0 justify-content-between">
        <div class="card-title">Card With Collapse Button</div>
        <a href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseExample">
          <vue-feather type="chevron-down" class="fs-18 collapse-open"></vue-feather>
          <vue-feather type="chevron-up" class="collapse-close fs-18"></vue-feather>
        </a>
      </div>
      <div class="collapse show border-top" id="collapseExample">
        <div class="card-body">
          <h6 class="card-text fw-semibold">Collapsible Card</h6>
          <p class="card-text mb-0">There are many variations...</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>`
};

const CardClosable = {
  emits: ['remove'],
  template: `
    <div class="card custom-card">
      <div class="card-header justify-content-between">
        <div class="card-title">Card With Close Button</div>
        <a href="javascript:void(0);" @click="$emit('remove', $event)">
          <vue-feather type="x" class="fs-18"></vue-feather>
        </a>
      </div>
      <div class="card-body">
        <h6 class="card-text fw-semibold">Closed Card</h6>
        <p class="card-text mb-0">There are many variations...</p>
      </div>
      <div class="card-footer">
        <button class="btn btn-primary">Read More</button>
      </div>
    </div>`
};

export default {
  components: {
    draggable,
    CardQuote,
    CardFullscreen,
    CardImageOverlay1,
    CardProfile1,
    CardProfile2,
    CardImageOverlay2,
    CardSuccess,
    CardCollapsible,
    CardClosable
  },
  data() {
    return {
      title: "Drag & Drop",
      text: "Dashboard",
      text1: "Drag & Drop",
      leftCards: [
        { id: 1, component: 'CardQuote', props: {} },
        { id: 2, component: 'CardFullscreen', props: {} },
        { id: 3, component: 'CardImageOverlay1', props: { requireImage: this.requireImage } },
        { id: 4, component: 'CardProfile1', props: { requireImageOne: this.requireImageOne } },
        { id: 5, component: 'CardProfile2', props: { requireImageOne: this.requireImageOne } }
      ],
      rightCards: [
        { id: 6, component: 'CardImageOverlay2', props: { requireImage: this.requireImage } },
        { id: 7, component: 'CardSuccess', props: { requireImageOne: this.requireImageOne } },
        { id: 8, component: 'CardCollapsible', props: {} },
        { id: 9, component: 'CardClosable', props: {} }
      ]
    };
  },
  methods: {
    requireImage(imageName) {
      return new URL(`/src/assets/img/media/${imageName}`, import.meta.url).href;
    },
    requireImageOne(imageName) {
      return new URL(`/src/assets/img/avatar/${imageName}`, import.meta.url).href;
    },
    removeCard(event) {
      const card = event.target.closest(".card");
      if (card) card.remove();
    }
  }
};
</script>

<style scoped>
.draggable-list {
  min-height: 100px;
}
</style>