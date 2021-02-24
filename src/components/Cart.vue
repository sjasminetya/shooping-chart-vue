<template>
    <div>
        <ul class="list-group mt-5">
            <li class="list-group-item">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="media">
                    <img width="80px" src="https://m.media-amazon.com/images/I/719tCHXNiXL._AC_UL320_.jpg" class="mr-3" alt="...">
                    <div class="media-body">
                        <h5 class="mt-0">Judul</h5>
                        <button class="btn-qty btn btn-sm btn-secondary">-</button>
                        x 1
                        <button class="btn-qty btn btn-sm btn-secondary">+</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style scoped>
.btn-qty {
    border-radius: 50%;
    width: 30px;
}

.media {
    width: 90%;
}

.media-body {
    text-align: left;
}
</style>
