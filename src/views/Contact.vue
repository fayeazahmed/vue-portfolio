<template>
    <div class="intro">
        <p>Fayeaz Ahmed</p>
        <p>+8801722797614</p>
        <p>r10.ahmed@yahoo.com</p>
        <p>BSc in CSE at American International University - Bangladesh: final year</p>
    </div>
    <div class="contact">
        <a href="mailto:r10.ahmed@yahoo.com">
            <div class="contact__element contact__element--yahoo">
                <i class="fa fa-yahoo fa-2x" aria-hidden="true"></i>
                <p class="d-inline-block">Mail me on Yahoo</p>
            </div>
        </a>
        <a href="https://github.com/fayeazahmed">
            <div class="contact__element contact__element--github">
                <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                <p class="d-inline-block">See repos on github</p>
            </div>
        </a>
        <a href="https://www.facebook.com/fayeaz.ahmed/">
            <div class="contact__element contact__element--facebook">
                <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
                <p class="d-inline-block">Message me on facebook</p>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/fayeaz-ahmed-9273301b3/">
            <div class="contact__element contact__element--linkedin"
                href="https://www.linkedin.com/in/fayeaz-ahmed-9273301b3/">
                <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                <p class="d-inline-block">Find me on Linkedin</p>
            </div>
        </a>
        <a href="https://www.instagram.com/fayeazahmed/">
            <div class="contact__element contact__element--instagram">
                <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                <p class="d-inline-block">See what's up with me on instagram</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: 'Contact',
}
</script>

<style scoped>
.intro p{
    font-family: monospace;
    font-size: 22px;
}
.contact {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.contact a {
    text-decoration: none;
}

.contact__element {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    border-radius: 30px;
    margin: 0 -5px;
}

.contact__element p {
    white-space: nowrap;
    margin: 0;
    max-width: 0;
    overflow: hidden;
    transition: all 0.5s;
    color: white;
}

.contact__element:hover p {
    max-width: 300px;
}

.contact__element i {
    margin: auto 1rem;
    color: white;
}
.contact__element--yahoo {
    background-color: rgba(74, 0, 160, 0.8);
}

.contact__element--github {
    background-color: rgba(51, 51, 51, 0.8);
}

.contact__element--facebook {
    background-color: rgba(23, 120, 242, 0.8);
}

.contact__element--linkedin {
    background-color: rgba(0, 97, 146, 0.8);
}

.contact__element--instagram {
    background-color: rgba(63, 114, 155, 0.8);
}
</style>