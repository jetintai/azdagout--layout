<template>
    <div class="menu menu-main">
        <span class="menu__logo">az.&</span>
        <nav class="navigation-links">
            <router-link v-for="(item, index) in navItems" class="navigations-links__item" :key="index" :to="item.href">
                <i :class="'icon icon-medium icon-pack--' + item.code"></i>
            </router-link>
        </nav>
        <span class = "menu-main__copyright">©Jetintai</span>
    </div>
</template>

<style lang="scss" scope>
@import '../../assets/scss/main';
.menu {
    display: block;
}
.menu-main {
    background-color: $c-green-eagle;
    position: absolute;
    float: left;
    width: 100px !important;
    left: 0px;
    height: 100%;

    &__copyright {
        color: $c_white;
        position: absolute;
        bottom: 20px;
        @include font-regular-veritate;
    }

    .menu__logo {
        text-decoration: none;
        color:$c_white;
        text-align: center;
        @include font-regular-nembus;
        display: block;
        margin: 10px 0 25px 0;
    }

    .navigation-links {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 10px 10px;
    }

    .navigations-links__item {
        color: $c_white;
        margin: 15px 0;
        @include font-regular-veritate;

        .icon {
            background-color: $c_white;
        }

        &:hover {
            opacity: .5;
        }

    }
}
</style>

<script>
export default {
    name: 'RightNav',
    data() {
        return {
            navItems: [
                {id: 1, code: 'home', title: 'Main', href: '/'},
                {id: 2, code: 'projects', title: 'Projects', href: '/projects'},
                {id: 3, code: 'tags', title: 'Tags', href: '/tags'},
                {id: 4, code: 'break', title: 'Break', href: '/break'},
            ],
            showMenu: false,
            top: '0px',
            left: '0px',
        };
    },
    computed: {
    },
    methods: {
        setMenu(top , left) {
            let heightOffset = this.player.enabled ? 64 : 0;
            let largestHeight =
                window.innerHeight - this.$refs.menu.offsetHeight - heightOffset;
            let largestWidth = window.innerWidth - this.$refs.menu.offsetWidth - 25;
            if (top > largestHeight) top = largestHeight;
            if (left > largestWidth) left = largestWidth;
            this.top = top + 'px';
            this.left = left + 'px';
        },
        closeMenu() {
            this.showMenu = false;
            if (this.$parent.closeMenu !== undefined) {
                this.$parent.closeMenu();
            }
            this.$store.commit('enableScrolling', true);
        },
        openMenu(e) {
            this.showMenu = true;
            this.$nextTick(
                function () {
                    this.$refs.menu.focus();
                    this.setMenu(e.y, e.x);
                }.bind(this)
            );
            e.preventDefault();
            this.$store.commit('enableScrolling', false);
        },
    },
};
</script>
