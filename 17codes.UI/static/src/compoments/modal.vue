<style scoped>
    .modal-dialog{
        position: fixed;
        margin: 0;
        left: 50%;
        top: 10%;
        width: auto !important;
    }
    .drag-cursor{
        cursor: move;
    }
    .body-style{
        overflow-y: auto;
    }
</style>


<template>
    <div v-show="show">
        <div class="modal" @click.self="clickMask">
            <div class="modal-dialog" :style="{marginLeft: -width/2+'px'}">
                <div class="modal-content" :style="{width: width+'px'}">
                    <div class="modal-header" :class="{'drag-cursor': dragable}" @mousedown.stop="targetMouseDown">
                        <div name="header">
                            <a type="button" class="close" @click="childClose">&times;</a>
                            <h4 class="modal-title">
                                <slot name="title">
                                    {{title}}
                                </slot>
                            </h4>
                        </div>
                    </div>
                    <!--内容(自动分发到此)-->
                    <div class="modal-body body-style" :style="{'max-height': maxHeight+'px'}">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <button type="button" :class="okClass" @click="childOk">{{okText}}</button>
                            <button type="button" :class="cancelClass" @click="childClose">{{cancelText}}</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-backdrop fade in"></div>
    </div>
</template>


<script>
    export default {
        props: {
            show: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: '标题'
            },
            width: {
                type: [Number,String],
                default: 500
            },
            maxHeight: {
                type: Number,
                default: 600
            },
            transition: {
                type: String,
                default: 'modal'
            },
            okText: {
                type: String,
                default: '确定'
            },
            cancelText: {
                type: String,
                default: '取消'
            },
            okClass: {
                type: String,
                default: 'btn btn-primary'
            },
            cancelClass: {
                type: String,
                default: 'btn btn-default'
            },
            dragable: {
                type: Boolean,
                default: true
            },
            blurClose: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                duration: null
            };
        },
        methods: {
            getCSS(o, key) {
                return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
            },
            addEvt(obj, ev, handler) {
                if (window.attachEvent) {
                    obj.attachEvent("on" + ev, handler);
                } else if (window.addEventListener) {
                    obj.addEventListener(ev, handler, false);
                }
            },
            removeEvt(elem, type, handler) {
                if (window.removeEventListener) {
                    elem.removeEventListener(type, handler, false);
                }
                else if (window.detachEvent) {
                    elem.detachEvent("on" + type, handler);
                }
            },
            targetMouseDown(ev) {
                let container = this.$el;
                if (this.dragable) {
                    let docW = document.documentElement.clientWidth,
                        docH = document.documentElement.clientHeight,
                        target = container.querySelector('.modal-dialog'),
                        panelW = parseInt(this.getCSS(target, 'width')),
                        panelH = parseInt(this.getCSS(target, 'height')),
                        startX = parseInt(this.getCSS(target, 'left')),
                        startY = parseInt(this.getCSS(target, 'top')),
                        eventX = ev.clientX,
                        eventY = ev.clientY;

                    var mouseMove = (e) =>{
                        let newLeft = e.clientX - eventX + startX;
                        let newTop = e.clientY - eventY + startY;

                        //横向不超出屏幕
                        if(newLeft < this.width/2){
                            newLeft = this.width/2;
                        }
                        else if(newLeft+panelW-this.width/2>docW){
                            newLeft = docW - panelW+this.width/2;
                        }

                        //纵向不超出屏幕
                        if(newTop<0){
                            newTop = 0;
                        }
                        else if(newTop+panelH>docH){
                            newTop = docH - panelH;
                        }

                        target.style.left = newLeft + 'px';
                        target.style.top = newTop + 'px';
                    }

                    var mouseUp = ev =>
                    {
                        this.removeEvt(document, 'mousemove', mouseMove);
                    }
                    this.addEvt(document, 'mousemove', mouseMove);
                    this.addEvt(document, 'mouseup', mouseUp);
                    return false;
                }
            },
            childOk () {
                this.$emit('msg-ok');
            },
            childClose () {
                this.$emit('msg-close');
            },
            clickMask () {
                if(this.blurClose){
                    this.childClose();
                }
            }
            
        }
    };
</script>


