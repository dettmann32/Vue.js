<template>
    <header>
        <div>Nome</div>
        <nav>
            <ul>
                <li>home</li>
                <li>info</li>
                <li>contact</li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name : 'TheHead'
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;

    }

    body{
    background-color: gray;
}
    header{
        background-color: rgb(107, 107, 245);
        padding: 10px;
    }
    ul{
        display: flex;
        gap: 10px;
        list-style-type:none;
        justify-content: end;

    }
</style>