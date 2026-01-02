<template>
  <div class="tab-pane fade" id="pills-low" role="tabpanel">
    <div class="d-flex align-items-start overflow-auto project-status pb-4">
      <div
        class="p-3 rounded bg-transparent-secondary w-100 me-3"
        v-for="(module, color) in modules"
        :key="color"
      >
        <div class="bg-white p-2 rounded mb-2">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <span :class="module.DotClass"
                ><span :class="module.DotClassOne"></span
              ></span>
              <h5 class="me-2">{{ module.Title }}</h5>
              <span class="badge bg-light rounded-pill">{{ module.Count }}</span>
            </div>
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i class="ti ti-dots-vertical"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-3">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    ><i class="ti ti-edit me-2"></i>Edit</a
                  >
                </li>
                <li>
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item rounded-1"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_modal"
                    ><i class="ti ti-trash me-2"></i>Delete</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="kanban-drag-wrap">
          <draggable
            :list="module.Cards"
            :group="{ name: 'kanban', pull: true, put: true }"
            @end="onDragEnd(color)"
          >
            <div v-for="Card in module.Cards" :key="Card.id">
              <div class="card kanban-card mb-2">
                <div class="card-body">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <div class="d-flex align-items-center">
                      <span class="badge bg-outline-dark me-2">Web Layout</span>
                      <span :class="Card.PowerClass"
                        ><i class="fas fa-circle fs-6 me-1"></i
                        >{{ Card.kanbanPower }}</span
                      >
                    </div>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-edit me-2"></i>Edit</a
                          >
                        </li>
                        <li>
                          <a
                            href="javascript:void(0);"
                            class="dropdown-item rounded-1"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                            ><i class="ti ti-trash me-2"></i>Delete</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <span class="avatar avatar-xs rounded-circle bg-warning me-2">
                      <img
                        src="@/assets/img/icons/kanban-arrow.svg"
                        class="w-auto h-auto"
                        alt="Img"
                      />
                    </span>
                    <h6 class="d-flex align-items-center">
                      Project Title
                      <span class="fs-12 ms-2 text-gray">{{ Card.Name }}</span>
                    </h6>
                  </div>
                  <div class="d-flex align-items-center border-bottom mb-3 pb-3">
                    <div class="me-3 pe-3 border-end">
                      <span class="fw-medium fs-12 d-block mb-1">Budget</span>
                      <p class="fs-12 text-dark">$24,000</p>
                    </div>
                    <div class="me-3 pe-3 border-end">
                      <span class="fw-medium fs-12 d-block mb-1">Tasks</span>
                      <p class="fs-12 text-dark">12/15</p>
                    </div>
                    <div class="">
                      <span class="fw-medium fs-12 d-block mb-1">Due on</span>
                      <p class="fs-12 text-dark">15 Apr 2024</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center justify-content-between">
                    <div class="avatar-list-stacked avatar-group-sm me-3">
                      <span class="avatar avatar-rounded">
                        <img
                          class="border border-white"
                          src="@/assets/img/profiles/avatar-19.jpg"
                          alt="img"
                        />
                      </span>
                      <span class="avatar avatar-rounded">
                        <img
                          class="border border-white"
                          src="@/assets/img/profiles/avatar-29.jpg"
                          alt="img"
                        />
                      </span>
                      <span class="avatar avatar-rounded">
                        <img
                          class="border border-white"
                          src="@/assets/img/profiles/avatar-16.jpg"
                          alt="img"
                        />
                      </span>
                      <span class="avatar avatar-rounded">
                        <img
                          class="border border-white"
                          src="@/assets/img/profiles/avatar-01.jpg"
                          alt="img"
                        />
                      </span>
                      <span class="avatar avatar-rounded">
                        <img
                          class="border border-white"
                          src="@/assets/img/profiles/avatar-02.jpg"
                          alt="img"
                        />
                      </span>
                      <span class="avatar avatar-rounded">
                        <img
                          class="border border-white"
                          src="@/assets/img/profiles/avatar-03.jpg"
                          alt="img"
                        />
                      </span>
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-rounded bg-primary fs-12 text-white"
                      >
                        1+
                      </a>
                    </div>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="d-flex align-items-center text-dark me-2"
                        ><i class="ti ti-message-circle text-gray me-1"></i>14</a
                      >
                      <a
                        href="javascript:void(0);"
                        class="d-flex align-items-center text-dark"
                        ><i class="ti ti-paperclip text-gray me-1"></i>14</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </draggable>
        </div>
        <div class="pt-2">
          <a
            href="javascript:void(0);"
            class="btn btn-white border border-dashed d-flex align-items-center justify-content-center"
          >
            <i class="ti ti-plus me-2"></i>
            New Project
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueDraggableNext } from "vue-draggable-next";
export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      modules: {
        Qualify: {
          DotClass: "bg-soft-pink p-1 d-flex rounded-circle me-2",
          DotClassOne: "bg-pink rounded-circle d-block p-1",
          Title: "New",
          Count: "02",
          Cards: [
            {
              Logo: "Web Layout",
              kanbanPower: "Low",
              PowerClass:
                "badge bg-success badge-xs d-flex align-items-center justify-content-center",
              Name: "PRJ-154",
            },
            {
              Logo: "Web Layout",
              kanbanPower: "Low",
              PowerClass:
                "badge bg-success badge-xs d-flex align-items-center justify-content-center",
              Name: "PRJ-155",
            },
          ],
        },
        Contact: {
          DotClass: "bg-soft-skyblue p-1 d-flex rounded-circle me-2",
          DotClassOne: "bg-skyblue rounded-circle d-block p-1",
          Title: "Inprogress",
          Count: "13",
          Cards: [
            {
              Logo: "Web Layout",
              kanbanPower: "Low",
              PowerClass:
                "badge bg-success badge-xs d-flex align-items-center justify-content-center",
              Name: "PRJ-156",
            },
            {
              Logo: "Web Layout",
              kanbanPower: "Low",
              PowerClass:
                "badge bg-success badge-xs d-flex align-items-center justify-content-center",
              Name: "PRJ-157",
            },
          ],
        },
        Presentation: {
          DotClass: "bg-soft-danger p-1 d-flex rounded-circle me-2",
          DotClassOne: "bg-danger rounded-circle d-block p-1",
          Title: "On-hold",
          Count: "04",
          Cards: [
            {
              Logo: "Web Layout",
              kanbanPower: "Low",
              PowerClass:
                "badge bg-success badge-xs d-flex align-items-center justify-content-center",
              Name: "PRJ-159",
            },
          ],
        },
        Proposal: {
          DotClass: "bg-soft-success p-1 d-flex rounded-circle me-2",
          DotClassOne: "bg-success rounded-circle d-block p-1",
          Title: "Completed",
          Count: "10",
          Cards: [
            {
              Logo: "Web Layout",
              kanbanPower: "Low",
              PowerClass:
                "badge bg-success badge-xs d-flex align-items-center justify-content-center",
              Name: "PRJ-161",
            },
          ],
        },
      },
    };
  },
  methods: {
    onDragEnd() {},
    onModuleDragEnd() {},
  },
};
</script>
